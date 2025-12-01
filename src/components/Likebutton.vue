<script>
export default {
  name: "Likebutton",
  props: {
    ticketNumber: {
      type: Number,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    },
    favourited: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    heartId() {
      return `heart-${this.ticketNumber}`;
    }
  }
};
</script>

<template>
  <div class="like-button">
    <input class="on" :id="heartId" type="checkbox" />
    <label class="like" :for="heartId">
      <svg
        class="like-icon"
        fill-rule="nonzero"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
      </svg>
      <span class="like-text">Likes</span>
    </label>

    <span class="like-count one">{{ likes }}</span>
    <span class="like-count two">{{ likes + 1 }}</span>
  </div>
</template>

<style scoped>

.on {
  display: none;
}

.like-button {
  position: relative;
  cursor: pointer;
  display: flex;
  height: 42px;
  width: 115px;
  border-radius: 14px;
  background-color: rgba(255,255,255,0.85);
  border: 1px solid rgba(0,0,0,0.08);
  backdrop-filter: blur(4px);
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.like {
  width: 70%;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-evenly;
}

.like-icon {
  height: 26px;
  width: 26px;
  fill: #505050;
 
  transition: 0.2s ease;
}

.like-text {
  color: #333;
  font-size: 14px;
  font-weight: 600;
}

.like-count {
  position: absolute;
  right: 0;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  font-weight: 700;
  background: rgba(0,0,0,0.03);
  border-left: 1px solid rgba(0,0,0,0.08);
  transition: 0.3s ease;
}

.like-count.two {
  transform: translateY(40px);
}

.on:checked ~ .like .like-icon {
  fill: #ff6b6b;
  animation: enlarge 0.2s ease-out;
}

.on:checked ~ .like-count.two {
  transform: translateY(0);
}

.on:checked ~ .like-count.one {
  transform: translateY(-40px);
}


@keyframes enlarge {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
