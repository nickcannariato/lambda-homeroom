<template>
  <nav>
    <v-toolbar app dark clipped-left color="primary">
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase font-weight-bold">Homeroom</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      app
      clipped
      dark
      disable-resize-watcher
      v-model="drawer"
      class="grey darken-4"
    >
      <v-list>
        <v-list-group>
          <v-list-tile slot="activator" avatar class="py-3">
            <v-list-tile-avatar>
              <img :src="`https://github.com/${currentUser.handle}.png`">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ currentUser.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-tile
          v-for="link in drawerLinks"
          :key="link.text"
          router
          :to="link.path"
          class="py-2"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentUser: { name: "Nick Cannariato", handle: "nickcannariato" },
      drawer: false,
      drawerLinks: [
        { name: "Home", path: "/", icon: "dashboard" },
        { name: "Curriculum", path: "/curriculum", icon: "chrome_reader_mode" },
        { name: "Settings", path: "/settings", icon: "settings" },
        { name: "Gear", path: "/gear", icon: "extension" }
      ]
    };
  },
  methods: {
    clicked() {
      console.log("click");
    }
  }
};
</script>

<style scoped>
</style>