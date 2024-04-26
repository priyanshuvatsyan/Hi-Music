<?php
session_start();

include('db_connect.php');

$msg = false;
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_name = $_POST['user_name'];
    $user_email = $_POST['user_email'];
    $user_password = $_POST['user_password'];
    $user_password_confirm = $_POST['user_repassword'];
    if ($user_password === $user_password_confirm) {
        $query = "INSERT INTO user (user, email, password) VALUES('$user_name', '$user_email', '$user_password')";
        mysqli_query($con, $query);
        header("Location: login.php");
    } else {
        $msg = "Wrong password";
    }
    
    }

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="login.css">
    <title>Create account</title>
</head>

<body>
    <header>
    
        <div class="left_bx1">
           <!--  <video autoplay muted loop id="video-background">
                <source src="thumbnails/login_bg_vdo.mp4" type="video/mp4">

            </video> -->
            <div class="content">
                <form method="post">
                    <h3>Hi Music</h3>
                    <div class="card">
                        <label for="name">Name</label>
                        <input type="text" name="user_name" placeholder="Priva" required>
                    </div>
                    <div class="card">

                        <label for="email">Email</label>
                        <input type="text" name="user_email" placeholder="sample@gmail.com" required>
                    </div>
                    <div class="card">
                        <label for="password">Password</label>
                        <input type="password" name="user_password" placeholder="Password" required>
                    </div>
                    <div class="card">

                        <label for="password"> Confirm Password</label>
                        <input type="password" name="user_repassword" placeholder="Password" required>
                    </div>
                    <input type="submit" value="Login" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""><span>Remember Password</span>
                    </div>
                    <p>Have have a account <a href="login.php">Log in</a></p>
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
                    
                </form>
            </div>
        </div>

    </header>
</body>

</html>