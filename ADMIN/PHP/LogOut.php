<?php
session_unset();
session_destroy();
echo json_encode("ok");