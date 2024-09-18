
/**
 * @roxi/routify 2.18.18
 * File generated Wed Sep 18 2024 18:07:37 GMT-0500 (Central Daylight Time)
 */

export const __version = "2.18.18"
export const __timestamp = "2024-09-18T23:07:37.743Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes.js"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "D:/Code/conan-launcher/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": false,
      "isDir": true,
      "file": "character",
      "filepath": "/character",
      "name": "character",
      "ext": "",
      "badExt": false,
      "absolutePath": "D:/Code/conan-launcher/src/pages/character",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[character_id].svelte",
          "filepath": "/character/[character_id].svelte",
          "name": "[character_id]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "D:/Code/conan-launcher/src/pages/character/[character_id].svelte",
          "importPath": "../src/pages/character/[character_id].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/character/:character_id",
          "id": "_character__character_id",
          "component": () => import('../src/pages/character/[character_id].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "character_information.svelte",
          "filepath": "/character/character_information.svelte",
          "name": "character_information",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "D:/Code/conan-launcher/src/pages/character/character_information.svelte",
          "importPath": "../src/pages/character/character_information.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/character/character_information",
          "id": "_character_character_information",
          "component": () => import('../src/pages/character/character_information.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "character_system_prompt.svelte",
          "filepath": "/character/character_system_prompt.svelte",
          "name": "character_system_prompt",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "D:/Code/conan-launcher/src/pages/character/character_system_prompt.svelte",
          "importPath": "../src/pages/character/character_system_prompt.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/character/character_system_prompt",
          "id": "_character_character_system_prompt",
          "component": () => import('../src/pages/character/character_system_prompt.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/character"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "characters",
      "filepath": "/characters",
      "name": "characters",
      "ext": "",
      "badExt": false,
      "absolutePath": "D:/Code/conan-launcher/src/pages/characters",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/characters/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "D:/Code/conan-launcher/src/pages/characters/index.svelte",
          "importPath": "../src/pages/characters/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/characters/index",
          "id": "_characters_index",
          "component": () => import('../src/pages/characters/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/characters"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "chat",
      "filepath": "/chat",
      "name": "chat",
      "ext": "",
      "badExt": false,
      "absolutePath": "D:/Code/conan-launcher/src/pages/chat",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/chat/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "D:/Code/conan-launcher/src/pages/chat/index.svelte",
          "importPath": "../src/pages/chat/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/chat/index",
          "id": "_chat_index",
          "component": () => import('../src/pages/chat/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/chat"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "edit_character",
      "filepath": "/edit_character",
      "name": "edit_character",
      "ext": "",
      "badExt": false,
      "absolutePath": "D:/Code/conan-launcher/src/pages/edit_character",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/edit_character/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "D:/Code/conan-launcher/src/pages/edit_character/index.svelte",
          "importPath": "../src/pages/edit_character/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/edit_character/index",
          "id": "_edit_character_index",
          "component": () => import('../src/pages/edit_character/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/edit_character"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "D:/Code/conan-launcher/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

