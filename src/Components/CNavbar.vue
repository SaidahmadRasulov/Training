<template>
    <header class="shadow-lg bg-white">
        <div class="md:max-w-[1200px] md:mx-auto sm:max-w-[100%]">
            <nav class="navbar py-5 px-3 sm:gap-10 flex items-center sm:justify-center md:justify-between w-full">
                <div class="gamburger sm:block md:hidden">
                    <i class="bx bx-menu text-[26px]"></i>
                </div>
                <div class="navbar__logo">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="navbar__nav sm:hidden md:flex items-center gap-5">
                    <button class=" sm:hidden text-white md:flex md:items-center gap-3 p-1 bg-indigo rounded-lg">
                        <img src="../assets/bookmark.png" alt="">
                        Favorites
                    </button>
                    <div class="account__image flex items-center">
                        <img src="../assets/account.png" class="rounded-full" alt="">
                        <i class="bx bx-chevron-down"></i>
                    </div>
                </div>
                <div class="navbar__exit sm:block md:hidden">
                    <i class="bx bx-exit text-[26px]"></i>
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