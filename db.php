<?php
   
   include('index.html');

        $con = mysqli_connect("localhost","root","","form_details"); //It connects

        if(!$con)
       {
        echo 'not connected';
       }
       
 mysqli_select_db($con,"form_details");

        $full_name = $_POST['full_name'];
        $email_id =$_POST['email'];
       $password = $_POST['password'];
       
       $dob =date('d-m-Y', strtotime($_POST['dob']));
       $radio=$_POST['radio'];
    
        $query = "INSERT INTO `form_details`.`form_table` (`full_name`,`email_id`,`password`,`dob`,`gender`,`time_stamp`) VALUES ('$full_name', '$email_id', '$password', '$dob','$radio',NOW());" ;
        if(!mysqli_query($con,$query))
        {
           echo 'Not Inserted';
        }
        else
        {
            echo 'Inserted';
        }

?>