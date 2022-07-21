<?php
$ma ="4-2=x";
$parts = explode("-", $ma);
$p = eval('return '.$parts[0].';');
print $p;