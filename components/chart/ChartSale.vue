<template>
  <VueApexCharts
    type="bar"
    height="100%"
    :options="options"
    :series="series"
  ></VueApexCharts>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            toolbar: {
              show: true,
            },
            zoom: {
              enabled: true,
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10,
              dataLabels: {
                total: {
                  enabled: true,
                  style: {
                    fontSize: "13px",
                    fontWeight: 900,
                  },
                },
              },
            },
          },
          xaxis: {},
          legend: {
            position: "right",
            offsetY: 40,
          },
          fill: {
            opacity: 1,
          },
        },
      };
    },
    props: {
      series: {
        type: Array,
      },
      categories: {
        type: Array,
      },
    },
    mounted() {
      if (this.categories) {

        this.options = {
          ...this.options,
          xaxis: {
            categories: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          },
        };
      }
    },
  };
</script>

<style>
  .checkbox-google {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    margin-right: 10px;
    position: relative;
    vertical-align: middle;
    font-size: 14px;
    user-select: none;
  }

  .checkbox-google input + .checkbox-google-switch {
    background: #9abef7;
    display: inline-block;
    width: 36px;
    height: 14px;
    border-radius: 20px;
    position: relative;
    top: 6px;
    vertical-align: top;
    transition: 0.2s;
  }

  .checkbox-google input + .checkbox-google-switch:before {
    background: #1a73e8;
    border-radius: 50%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: 0.15s;
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -3px;
    left: -1px;
    transform: translateX(18px);
  }

  .apexcharts-inactive-legend .checkbox-google .checkbox-google-switch {
    background: #9f9f9f;
    transition: 0.15s;
  }

  .apexcharts-inactive-legend .checkbox-google .checkbox-google-switch:before {
    background: #fff;
    transform: translateX(0);
    transition: 0.15s;
  }

  .checkbox-google input {
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  /* Disabled */
  /* .checkbox-google input:disabled+.checkbox-google-switch {
      filter: grayscale(60%);
      border-color: rgba(0, 0, 0, .1);
  }

  .checkbox-google input:disabled+.checkbox-google-switch:before {
      background: #eee;
  } */
</style>
