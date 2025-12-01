<script>
import Likebutton from './Likebutton.vue'

export default {
  name: 'Card',
  props: {
    tickets: Object,
  },
  components: {
    Likebutton,
  },
}
</script>

<template>
  <div
    class="card ticket-card mb-3"
    :class="[tickets.name, { featured: tickets.featured }]"
    :style="{ borderColor: tickets.color }"
    style="position: relative; max-width: 540px"
  >
    <div v-if="tickets.featured" class="ribbon">Featured</div>

    <div class="row g-0" style="height: 100%;">
      <div class="col-md-4" style="height: 100%;">
        <img :src="tickets.image" class="ticket-img rounded-start" alt="..." />
      </div>
      <div class="col-md-8 d-flex flex-column" style="height: 100%;">
        <div class="card-body d-flex flex-column" style="height: 100%; padding: 1rem;">
          <Likebutton class="like-button" :ticket-number="tickets.id" :likes="tickets.likes" />
          <h5 class="card-title mb-2">{{ tickets.name }}</h5>
          <p class="card-text mb-2" style="font-size: 0.9rem;">{{ tickets.description }}</p>
          <h6 class="mb-1" style="font-size: 0.95rem;">Benefits:</h6>
          <ul class="grow mb-2" style="font-size: 0.85rem; padding-left: 1.2rem;">
            <li v-for="benefit in tickets.benefits" :key="benefit">{{ benefit }}</li>
          </ul>
          <div class="mt-auto">
            <p class="card-text fw-bold mb-2" style="font-size: 1.1rem;">{{ tickets.price }}</p>
            <button class="btn-buy">Buy Ticket</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ticket-card {
  background: white;
  border-radius: 16px;
  border: 3px solid var(--primary);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

/* Fixed height only on desktop */
@media (min-width: 768px) {
  .ticket-card {
    height: 420px;
  }
}

.ticket-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.15);
}

.ticket-img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

/* Fixed height on desktop */
@media (min-width: 768px) {
  .ticket-img {
    height: 414px;
  }
}

/* Auto height on mobile */
@media (max-width: 767px) {
  .ticket-img {
    height: 250px;
  }
}

.Bronze {
  border-color: var(--ticket-bronze);
}
.Silver {
  border-color: var(--ticket-silver);
}
.Gold {
  border-color: var(--ticket-gold);
}

.card-title {
  color: var(--primary);
  font-weight: 700;
}

.card-text {
  color: #444;
}

.btn-buy {
  background: var(--accent);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;
  width: 100%;
}

.btn-buy:hover {
  background: var(--primary);
}

.like-button {
  position: absolute;
  top: 2px;
  right: 10px;
  z-index: 10;
}

.Bronze.featured { box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1); }
.Silver.featured { box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1); }
.Gold.featured   { box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1); }

.ribbon {
  position: absolute;
  top: 10px;
  left: -5px;
  background: orange;
  color: white;
  padding: 4px 10px;
  font-weight: bold;
  transform: rotate(-20deg);
  z-index: 2;
}

/* Desktop-specific styles */
@media (min-width: 768px) {
  .card-row {
    height: 100%;
  }
  
  .image-col {
    height: 100%;
  }
  
  .content-col {
    height: 100%;
  }
  
  .card-body-inner {
    height: 100%;
    padding: 1rem;
  }
}

/* Mobile-specific styles */
@media (max-width: 767px) {
  .card-body-inner {
    padding: 1rem;
  }
}
</style>