
    <?php
      $day = "";
      $time = "";
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $day = $_POST["day"];
        $time = $_POST["time"];
      }
      echo $day;
      echo $time;
    ?>