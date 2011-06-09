<?php

/**
 * Implementation of hook_context_default_contexts().
 */
function ec_soapbox_context_default_contexts() {
  $export = array();
  $context = new stdClass;
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'soapbox_node';
  $context->description = 'This context is active on soapbox node pages.';
  $context->tag = '';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'soapbox' => 'soapbox',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
  );
  $context->reactions = array();
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('This context is active on soapbox node pages.');

  $export['soapbox_node'] = $context;
  return $export;
}
