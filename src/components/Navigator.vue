<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/linkedin">LinkedIn</RouterLink>
    <RouterLink to="/youtube">YouTube</RouterLink>
    <RouterLink to="/metrics">Metrics</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<style>
@import '@/assets/base.css';

nav {
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
}

.img {
  height: 200px;
  width: auto;
}
</style>
