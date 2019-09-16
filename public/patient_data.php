<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

Script tag goes straight into the bottom underneath where patient data goes

Declarative rendering

var app = new Vue ({
  el: '#patientWaitingApp',
  data: {
    message: 'Hello'
})

Then:
    {{message}}
    - goes into html and will display 'Hello'
