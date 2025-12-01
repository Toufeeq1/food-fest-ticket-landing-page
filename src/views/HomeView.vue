<script>
import Card from '../components/Card.vue'
import tickets  from '@/data/tickets'
export default {
  data() {
    return {
      tickets,
    }
  },
  components: {
    Card,
  },
}
</script>

<template>
  <main>
    <div v-for="ticket in tickets" :key="ticket.id">
      <Card :tickets="ticket" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
