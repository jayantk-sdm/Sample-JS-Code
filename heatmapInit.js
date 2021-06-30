



Highcharts.chart('container-heatmap', {

    chart: {
      type: 'heatmap',
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1
    },
  
    title: {
      text: 'Data per Column '
    },
  
    xAxis: {
      categories: window.heatmapLabel 
    },
  
    yAxis: {
      categories: window.heatmapLabel ,
      title: null
    },
  
    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[5]
    },
  
    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 10,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 500
    },
  
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
          this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
      }
    },
  
    series: [{
      name: 'Sales per employee',
      // "turboThreshold": 3000,
      borderWidth: 1,
      data: window.heatmapData,
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }]
  
  });
  // alert(window.heatmapData);