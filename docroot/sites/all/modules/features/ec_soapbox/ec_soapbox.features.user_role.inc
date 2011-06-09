<?php

/**
 * Implementation of hook_user_default_roles().
 */
function ec_soapbox_user_default_roles() {
  $roles = array();

  // Exported role: soapbox author
  $roles['soapbox author'] = array(
    'name' => 'soapbox author',
  );

  return $roles;
}
