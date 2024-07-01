<script>
import { onMounted, ref } from 'vue';
import Plotly from 'plotly.js-dist-min';

export default {
  name: 'PlotlyChart',
  setup() {
    const plotlyChart = ref(null);

    onMounted(() => {
      const data = [
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          type: 'scatter'
        }
      ];

      const layout = {
        title: 'Plotly.js Chart in Vue'
      };

      Plotly.newPlot(plotlyChart.value, data, layout);
    });

    return {
      plotlyChart
    };
  }
};
</script>

<template>
  <div ref="plotlyChart" style="width: 100%; height: 400px;"></div>
</template>

<style scoped></style>
