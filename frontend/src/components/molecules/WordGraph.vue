<script>

import { Bar, mixins } from 'vue-chartjs';

export default {
    name: 'WordGraph',
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: {
        wordList: {
            type: Array,
            required: false
        },
        cntList: {
            type: Array,
            required: false
        },
        chartData: {
          type: Object,
          required: false
        },
        options: {
          type: Object,
          required: false
        }
    },
    data() {
      return {
        chartObject: null
      }
    },
    /*
    data () {
    return {
      chartData: {
        //labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        labels: this.wordList,
        datasets: [
          {
            label: 'Bar Dataset',
            //data: [10, 20, 30, 40, 50, 30],
            data: this.cntList,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: '出現回数'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10,
            }
          }]
        }
      }
    }
  },
  */
  mounted () {
    this.chartObject = this.renderChart(this.chartData, this.options)
    //console.log(this.chartObject);
  },
  methods: {
        gogo: function() {
            console.log("君がいなくなった日々も");
        },
    },

}
</script>