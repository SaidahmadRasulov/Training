<template>
    <header class="shadow-lg">
        <div class="container mx-auto">
            <nav class="navbar py-5 px-3 flex items-center justify-between">
                <div class="navbar__logo">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="navbar__nav flex items-center gap-5">
                    <button class=" text-white flex items-center gap-3 p-1 bg-indigo rounded-lg">
                        <img src="../assets/bookmark.png" alt="">
                        Favorites
                    </button>
                    <div class="account__image flex items-center">
                        <img src="../assets/account.png" class="rounded-full" alt="">
                        <i class="bx bx-chevron-down"></i>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<script lang="ts">
export default {
    
}
</script>
<style>
    
</style>