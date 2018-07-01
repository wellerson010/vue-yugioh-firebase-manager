<template>
    <v-app dark>
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-tile v-for="item in itemsDrawer" :key="item.title" :to="item.url">
                    <v-list-tile-content>
                         <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app>
            <v-toolbar-side-icon @click="drawer = !drawer"/>
            <v-toolbar-title>Yu-Gi-Oh! Manager</v-toolbar-title>
        </v-toolbar>
        <v-content>
            oi
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationDrawerItem from '@/models/NavigationDrawerItem';

@Component
export default class Main extends Vue {
    drawer = false;

    itemsDrawer: NavigationDrawerItem[] = [
        {
            title: 'Cards',
            url: '/cards'
        },
        {
            title: 'Deck',
            url: '/deck'
        },
        {
            title: 'Booster',
            url: '/booster'
        },
        {
            title: 'Shopping',
            url: '/shopping'
        },
        {
            title: 'Store',
            url: '/store'
        }
    ];
}
</script>

<style>

</style>
