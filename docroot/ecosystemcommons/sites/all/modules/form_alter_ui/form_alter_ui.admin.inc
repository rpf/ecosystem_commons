<?php

/**
 * Settings form for the Form Alter UI module itself.
 */
function form_alter_ui_settings(&$form_state, $theme = NULL) {
  $form = array();

  // Checkbox - capture log of viewed forms
  $form['form_alter_ui_enable'] = array(
    '#title' => t('Enable capture of viewed forms'),
    '#type' => 'checkbox',
    '#default_value' => variable_get('form_alter_ui_enable', FALSE),
    '#description' => t('When this option is enabled, the module will record all forms seen.'),
  );

  $form['form_alter_ui_use_krumo'] = array(
    '#title' => t('Use Krumo for display of elements'),
    '#type' => 'checkbox',
    '#default_value' => variable_get('form_alter_ui_use_krumo', TRUE),
    '#description' => t('If devel module is installed and enabled, Form Alter UI will make use of the Krumo support built into that module.'),
  );

  $form['form_alter_ui_expand_altered_elements'] = array(
    '#title' => t('Expand altered form elements'),
    '#type' => 'checkbox',
    '#default_value' => variable_get('form_alter_ui_expand_altered_elements', FALSE),
    '#description' => t('If enabled, then expand the fieldset on the form-alter screen when modifications are present.'),
  );

  // TODO: user selector - users to capture forms for

  // List of recently viewed forms
  $header = array(
    array('data' => t('Form ID'), 'field' => 'form_id'),
    array('data' => t('Last Accessed'), 'field' => 'timestamp', 'sort' => 'desc'),
    t('Operations'),
  );

  $sql = 'SELECT form_id, timestamp, location FROM {form_alter_ui_log}';
  $tablesort = tablesort_sql($header);

  $result = pager_query($sql . $tablesort, 10);

  $rows = array();
  while ($row = db_fetch_object($result)) {

    $alterations = form_alter_ui_load_alteration($row->form_id);
    if ($alterations->alterations) {
      $links = l('modify', 'admin/settings/form_alter/alter/'. $row->form_id);
      $links .= ', delete'; // . l('delete', 'admin/settings/form_alter/alter/'. $row->form_id);
      // $links .= ', '. l('export', 'admin/build/form_alter/'. $row->form_id .'/export');
    }
    else {
      $links = l('create', 'admin/settings/form_alter/alter/'. $row->form_id);
    }

    $rows[] = array(
      $row->form_id,
      format_date($row->timestamp) .' '. l('view', $row->location),
      $links,
    );
  }

  if (empty($rows)) {
    $form['form_alter_ui_enable']['#description'] .= ' <em>'. t('You have not recorded any forms!') .'</em>';
  }
  else {
    $form['recent'] = array(
      '#type' => 'markup',
      '#value' => theme('table', $header, $rows) . theme('pager', NULL, 10, 0),
    );
  }


  // Save module settings in drupal variables
  return system_settings_form($form);
}

/**
 * The form used to modify an existing (subject) form.
 */
function form_alter_ui_alter_form(&$form_state, $form_id = NULL) {
  // Load the saved form information
  $alterations = form_alter_ui_load_alteration($form_id);
  if ($alterations == FALSE) {
    return;
  }

  // Prepare for processing of the subject form
  $default_values = $alterations->alterations ? $alterations->alterations : array();

  $form = array(
    '#tree' => TRUE,
    // $var_name => array(),
  );
  $form['alter_form_id'] = array(
    '#type' => 'value',
    '#value' => $form_id,
  );

  // Form-level alterations
  $form['form'] = array(
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
    '#title' => t('Alter Entire Form'),
    '#description' => t('In this section, you can apply changes to the entire form.'),
  );

  $form['form']['preamble'] = array(
    '#value' => form_alter_ui_display_object($alterations->form),
  );

  $form['form']['php'] = array(
    '#type' => 'textarea',
    '#title' => 'Custom PHP',
    '#description' => t('You may post PHP code that will be executed for form "%form_id". You should NOT include &lt;?php ?&gt; tags. At the time of execution, both $form and $form_state are defined. This is executed BEFORE any field-level modifications below.', array('%form_id' => $form_id)),
    '#default_value' => isset($default_values['form']['php']) ? $default_values['form']['php'] : '',
    '#rows' => 10,
  );

  if ($form['form']['php']['#default_value'] !== '') {
    $form['form']['#title'] .= ' - ' . t('Altered');
    if (variable_get('form_alter_ui_expand_altered_elements', FALSE)) {
      $form['form']['#collapsed'] = FALSE;
    }
  }


  // Element-level alterations
  foreach ($alterations->form as $key => $element) {
    if ($key[0] == '#' || strncmp($key, 'form_', 5) === 0) {
      continue;
    }

    $form[$key] = array(
      '#type' => 'fieldset',
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
      '#tree' => TRUE,
      '#title' => t('Alter @key', array('@key' => $key)),
    );

    $altered = FALSE;

    $form_element = &$form[$key];
    $element_defaults = $default_values[$key];

    $form_element['preamble'] = array(
      '#value' => form_alter_ui_display_object($element, '$element = ') .
        '<p>'. t('Hint: Set a field to %value to leave it unchanged.', array('%value' => form_alter_ui_DEFAULT_VALUE)) .'</p>',
    );

    foreach (_form_alter_ui_get_elements() as $akey=> $aelement) {
      $adefault = isset($element_defaults[$akey]) ? $element_defaults[$akey] : form_alter_ui_DEFAULT_VALUE;
      $form_element[$akey] = $aelement + array(
        '#default_value' => $adefault,
      );
      if ($adefault != form_alter_ui_DEFAULT_VALUE) {
        $altered = TRUE;
      }
    }

    $form_element['php'] = array(
      '#type' => 'textarea',
      '#title' => 'Custom PHP',
      '#description' => t('You may post PHP code that will be executed for form element "%key". You should NOT include &lt;?php ?&gt; tags. You may modify $element.', array('%key' => $key)),
      '#default_value' => $element_defaults['php'],
      '#rows' => 5,
    );

    $php_value = $form_element['php']['#default_value'];
    if ($php_value !== NULL && $php_value !== '') {
      $altered = TRUE;
    }

    if ($altered) {
      $form[$key]['#title'] .= ' - ' . t('Altered');
      if (variable_get('form_alter_ui_expand_altered_elements', FALSE)) {
        $form[$key]['#collapsed'] = FALSE;
      }
    }
  }

  drupal_set_title(t('Modify Form %form_id', array('%form_id' => $form_id)));
  $form['form_alter_ui_buttons']['submit'] = array('#type' => 'submit', '#value' => t('Save alterations') );
  return $form;

}

function form_alter_ui_alter_form_submit($form, &$form_state) {
  // Copy just the bits we want from the form to the saved settings
  $values = $form_state['values'];
  $alter_form_id = $values['alter_form_id'];
  unset($values['alter_form_id']);
  unset($values['op']);
  unset($values['buttons']);
  unset($values['form_build_id']);
  unset($values['form_token']);
  unset($values['form_id']);
  form_alter_ui_save_alteration($alter_form_id, $values);
}



/**
 * Form Alter settings export form.
 */
function form_alter_ui_export_form(&$form_state, $theme = NULL) {
  $form = array();
  // ...
  return $form;
}

/**
 * Form Alter settings import form.
 */
function form_alter_ui_import_form(&$form_state) {
  $form = array();
  // ...
  return $form;
}

/**
 * Output an array or object suitable for display. If devel module is present,
 * use the krumo support in that module to provide a DHTML version.
 */
function form_alter_ui_display_object($object, $prefix = '$form = ') {
  if (module_exists('devel') && variable_get('form_alter_ui_use_krumo', TRUE)) {
    return krumo_ob($object);
  }
  else {
    return '<pre>' . $prefix . htmlspecialchars(print_r($object, TRUE)) .'</pre>';
  }
}
