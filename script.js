$(document).ready(function() {
  $('#bmi-form').on('submit', function(event) {
    event.preventDefault();
    const height = $('#height').val();
    const weight = $('#weight').val();

    $.ajax({
      url: '/bmi',
      method: 'POST',
      data: { height, weight },
      success: function(response) {
        const bmi = response.bmi;
        $('#bmi-result').html(`BMI: ${bmi.toFixed(2)}`);
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  });

  $('#bodyfat-form').on('submit', function(event) {
    event.preventDefault();
    const bmi = $('#bmi').val();
    const age = $('#age').val();
    const gender = $('#gender').val();

    $.ajax({
      url: '/bodyfat',
      method: 'POST',
      data: { bmi, age, gender },
      success: function(response) {
        const bodyFat = response.bodyFat;
        $('#bodyfat-result').html(`Body Fat: ${bodyFat.toFixed(2)}`);
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  });

  $('#idealweight-form').on('submit', function(event) {
    event.preventDefault();
    const height = $('#height').val();
    const gender = $('#gender').val();

    $.ajax({
      url: '/idealweight',
      method: 'POST',
      data: { height, gender },
      success: function(response) {
        const idealWeight = response.idealWeight;
        $('#idealweight-result').html(`Ideal Weight: ${idealWeight.toFixed(2)}`);
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  });

  $('#caloriesburned-form').on('submit', function(event) {
    event.preventDefault();
    const weight = $('#weight').val();
    const duration = $('#duration').val();
    const activityLevel = $('#activityLevel').val();

    $.ajax({
      url: '/caloriesburned',
      method: 'POST',
      data: { weight, duration, activityLevel },
      success: function(response) {
        const caloriesBurned = response.caloriesBurned;
        $('#caloriesburned-result').html(`Calories Burned: ${caloriesBurned.toFixed(2)}`);
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  });
});
