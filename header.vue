<template>
    <header>
    <b-button-group size="lg">
    <b-button><router-link to="/breadcrumbs"> Breadcrumbs</router-link> </b-button>
    <b-button><router-link to="/badges"> Badges</router-link> </b-button>
    <b-dropdown id="dropdown-dropright" dropright text="Routes">
    <b-dropdown-item> <router-link to="/breadcrumbs"> Breadcrumbs</router-link> </b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item> <router-link to="/badges"> Badges</router-link></b-dropdown-item>
    </b-dropdown>
    </b-button-group>
    
        
    </header>
</template>