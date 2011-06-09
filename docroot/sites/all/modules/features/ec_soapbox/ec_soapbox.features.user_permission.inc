<?php

/**
 * Implementation of hook_user_default_permissions().
 */
function ec_soapbox_user_default_permissions() {
  $permissions = array();

  // Exported permission: create soapbox content
  $permissions['create soapbox content'] = array(
    'name' => 'create soapbox content',
    'roles' => array(
      '0' => 'soapbox author',
    ),
  );

  // Exported permission: delete own soapbox content
  $permissions['delete own soapbox content'] = array(
    'name' => 'delete own soapbox content',
    'roles' => array(),
  );

  // Exported permission: edit own soapbox content
  $permissions['edit own soapbox content'] = array(
    'name' => 'edit own soapbox content',
    'roles' => array(
      '0' => 'soapbox author',
    ),
  );

  return $permissions;
}
