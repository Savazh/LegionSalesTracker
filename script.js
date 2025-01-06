document.addEventListener("DOMContentLoaded", function () {
    // Profit and Loss Chart
    const pnlCtx = document.getElementById("pnlChart").getContext("2d");
    new Chart(pnlCtx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                label: "PnL ($)",
                data: [500, -200, 300, 100, 700],
                backgroundColor: ["#4caf50", "#f44336", "#4caf50", "#4caf50", "#4caf50"]
            }]
        },
        options: {
            responsive: true
        }
    });

    // Sales Distribution Chart
    const salesCtx = document.getElementById("salesDistribution").getContext("2d");
    new Chart(salesCtx, {
        type: "pie",
        data: {
            labels: ["Legion", "Warrior", "Mage"],
            datasets: [{
                data: [40, 30, 30],
                backgroundColor: ["#ff5722", "#3f51b5", "#00bcd4"]
            }]
        },
        options: {
            responsive: true
        }
    });
});