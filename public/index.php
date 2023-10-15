<?php

$current_stable = "2.0";

header('Location: /v' . $current_stable . '/', true, 302);
exit;