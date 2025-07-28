<?php
session_start();

if (!isset($_SESSION['is_admin']) || $_SESSION['is_admin'] !== true) {
    header('Location: signin.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Admin Panel - my_shop</title>
    <link rel="stylesheet" href="css/admin.css">
</head>
<body>
<header>
    <h1>my_shop - Administration</h1>
    <a href="logout.php" class="logout">Déconnexion</a>
</header>

<div class="container">
    <nav class="sidebar">
        <ul>
            <li><a href="admin_users.php">📋 Afficher les utilisateurs</a></li>
            <li><a href="admin_edit_user.php">📝 Modifier un utilisateur</a></li>
            <li><a href="admin_delete_user.php">🗑️ Supprimer un utilisateur</a></li>
            <hr>
            <li><a href="admin_add_product.php">➕ Ajouter un produit</a></li>
            <li><a href="admin_products.php">📦 Voir tous les produits</a></li>
            <li><a href="admin_edit_product.php">✏️ Modifier un produit</a></li>
            <li><a href="admin_delete_product.php">🗑️ Supprimer un produit</a></li>
        </ul>
    </nav>

    <main class="main-content">
        <h2>Bienvenue, administrateur 👋</h2>
        <p>Utilisez le menu à gauche pour gérer les utilisateurs et les produits.</p>
    </main>
</div>
</body>
</html>
