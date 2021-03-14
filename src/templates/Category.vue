<template>
  <Layout>
    <div>
      <h1>{{ $page.category.name }}</h1>
      <ul>
        <li v-for="restaurant in $page.category.restaurants" :key="restaurant.id">
            {{ restaurant.name }}
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query Category($id: ID!) {
      category: strapiCategory(id: $id) {
        name
        restaurants {
          id
          name
        }
      }
    }
</page-query>