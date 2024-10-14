<script setup lang="ts">
import { ref } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import 'ag-grid-community/styles/ag-grid.min.css';
import 'ag-grid-community/styles/ag-theme-alpine.min.css';

const columnDefs = ref([
  { field: 'week', sortable: true, filter: true },
  { field: 'sessions', sortable: true, filter: true },
  { field: 'conversions', sortable: true, filter: true },
  { field: 'sales', sortable: true, filter: true },
])

const rowData = ref([
  { week: 'T - 0', sessions: 1200, conversions: 350, sales: 12 },
  { week: 'T - 1', sessions: 1232, conversions: 320, sales: 21 },
  { week: 'T - 2', sessions: 631, conversions: 123, sales: 32 },
])

const defaultColDef = ref({
  flex: 1,
  minWidth: 100,
  resizable: true,
  sortable: true,
});
</script>

<template>
  <div class="ag-theme-alpine-dark" style="height: 400px; width: 100%;">
    <AgGridVue class="ag-theme-alpine-dark" :rowData="rowData" :columnDefs="columnDefs" :defaultColDef="defaultColDef"
      :animateRows="true" />
  </div>
</template>

<style scoped>
.ag-theme-alpine-dark {
  height: 100%;
  width: 100%;
}
</style>
