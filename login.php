<?php
session_start();
include('db_connect.php');
$msg = false;
if(isset($_POST['user_name']) ){
    $user_name = $_POST['user_name'];
    $user_password = $_POST['user_password'];

    $query = "select * from user where user = '".$user_name."' AND password = '".$user_password."' limit 1";
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result) == 1) {
        header('Location: index.php' );
    }
    else {
        $msg = "Incorrect Password";
    }
}
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Login</title>
</head>

<body>
    <header>



        <div class="left_bx1">
            <!-- <video autoplay muted loop id="video-background">
                <source src="thumbnails/login_bg_vdo.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video> -->
            <!--  <img src="thumbnails/10.jpeg" alt=""> -->
            <div class="content">
                <form method="post">
                    <h3>Login</h3>
                    <div class="card">
                        <label for="name">Name</label>
                        <input type="text" name="user_name" placeholder="Priva" required>
                    </div>
                    <div class="card">
                        <label for="password">Password</label>
                        <input type="password" name="user_password" placeholder="Password" required>
                    </div>
                    <input type="submit" value="Login" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""><span>Remember Password</span>
                    </div>
                    <p>Don't have a account <a href="signUpPage.php">Sign Up</a></p>

                </form>
                <?php
                   // echo ('<h3>'.$msg.'</h3>');
                   echo ( '<h3 class="wp" style=" background-color: #5adae0;
                   font-family: cursive;
                   padding: 5px 20px 5px 20px;
                   border-radius: 20px;
                   display: inline-block;
                   left: 50%;
                   transform: translateX(-50%);
                   position: absolute;
                   opacity: 50%;
                   ">' .$msg. '</h3>');
                    ?>
            </div>
        </div>

    </header>
</body>

</html>