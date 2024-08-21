document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('lineChart').getContext('2d');

  
    const gradient = ctx.createLinearGradient(0, 0, 400, 0); 
    gradient.addColorStop(0, '#ff8a00');  
    gradient.addColorStop(0.5, '#e52e71'); 
    gradient.addColorStop(1, '#9d50bb');  

    const data = {
        labels: ['8am', '10am', '12am', '2pm', '4pm', '6pm'],
        datasets: [{
            data: [30, 50, 40, 60, 45, 70],
            borderColor: gradient,
            borderWidth: 8,
            tension: 0.5,
            fill: false,
            pointBackgroundColor: gradient, 
            pointBorderColor: gradient, 
            pointRadius: 5,
            pointHoverRadius: 7,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: 'white',
                    }
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    };

    const lineChart = new Chart(ctx, config);
});
