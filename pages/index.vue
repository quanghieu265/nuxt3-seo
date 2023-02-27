<template>
    <div>
        <p>Welcome to the Home page</p>
        <v-btn @click="handleLogOut">
            Log out
        </v-btn>
    </div>
</template>

<script setup>

const { logOut } = useAuth()
const handleLogOut = async () => {
    await logOut()
    return navigateTo("/login");
}
useDynamicHeader("Home Page", 'Welcome to the Home Page')
</script>