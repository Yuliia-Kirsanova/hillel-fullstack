<?php
$errors = [
    'name' => null,
    'email' => null,
    'password' => null,
    'agree' => null
];
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo "IS GET";
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "IS POST";
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $agree = isset($_POST['agree']) ? $_POST['agree'] : '';
    if ($name === '') {
        $errors["name"] = "Name is required";
    }
    if ($email === '') {
        $errors["email"] = "Email is required";
    }
    elseif (strlen($email) > 255) {
        $errors ["email"] = "Email must have less than 255 symbols";
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Incorrect email format";
    }
    if ($password === '') {
        $errors["password"] = "Password is required";
    } elseif (strlen($password) < 8 || !preg_match("/[a-zA-Z]/", $password) || !preg_match("/[0-9]/", $password)) {
        $errors["password"] = "Password must contain at least 8 symbols including at least 1 letter and 1 number";
    }
    if ($agree === '') {
        $errors["agree"] = "Please accept Terms & Conditions";
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Sign Up</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<div class="container mt-5">
    <h2> Form</h2>
    <form action="index.php" method="post">
        <div class="form-group">
            <label for="name"> Name</label>
            <input type="text" class="form-control" id="name" name="name"
                   value="<?php echo isset($name) ? htmlspecialchars($name) : ''; ?>">
            <div style="color: red"><?php echo isset($errors['name']) ? $errors['name'] : ''; ?></div>
        </div>
        <div class="form-group">
            <label for="email"> Email</label>
            <input type="email" class="form-control" id="email" name="email"
                   value="<?php echo isset($email) ? htmlspecialchars($email) : ''; ?>">
            <div style="color: red"><?php echo isset($errors['email']) ? $errors['email'] : ''; ?></div>

        </div>
        <div class="form-group">
            <label for="password"> Password</label>
            <input type="password" class="form-control" id="password" name="password"
                   value="<?php echo isset($password) ? htmlspecialchars($password) : ''; ?>">
            <div style="color: red"><?php echo isset($errors['password']) ? $errors['password'] : ''; ?></div>
        </div>
        <div class="form-group">
            <label for="country"> Country</label>
            <select class="form-control" id="country" name="country">
                <option value=""> Select your country</option>
                <option value="ukraine" <?php echo isset($_POST['country']) && $_POST['country'] === 'ukraine' ? 'selected' : ''; ?>> UA</option>
                <option value="united_states"<?php echo isset($_POST['country']) && $_POST['country'] === 'united_states' ? 'selected' : ''; ?>> USA</option>
                <option value="uk"<?php echo isset($_POST['country']) && $_POST['country'] === 'uk' ? 'selected' : ''; ?>> UK</option>
            </select>
        </div>
        <div class="form-group">
            <label>Gender</label><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="male"
                       value="male"<?php echo isset($_POST['gender']) && $_POST['gender'] == 'male' ? 'checked' : ''; ?>>
                <label class="form-check-label" for="male">Male</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="female"
                       value="female"<?php echo isset($_POST['gender']) && $_POST['gender'] == 'female' ? 'checked' : ''; ?>>
                <label class="form-check-label" for="female"> Female</label>
            </div>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="agree"
                   name="agree"  <?php echo isset($agree) && $agree == 'on' ? 'checked' : ''; ?>>
            <label class="form-check-label" for="agree"> I accept Terms & Conditions </label>
            <div style="color: red"><?php echo isset($errors['agree']) ? $errors['agree'] : ''; ?></div>
        </div>
        <button type="submit" class="btn btn-primary mt-3"> Sign In</button>
    </form>
</div>

