<template>
    <div>
        <CustomAlert />
        <header>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/signup">Sign Up</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/profile">Profile</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>
  