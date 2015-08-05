<?php
  $ROOT = './';
?>

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>About — JMac Masonry</title>
    <meta name="description" content="Fully licensed and insured. JMac Masonry is a small masonry restoration company, that stands behind their work.">

  <?php include('header.php'); ?>

  <header class="header">
    <h1>Our History</h1>
  </header>

  <main class="main container" >
    <section id="bio" class="row">
      <article class="medium-4 medium-push-1 columns">
        <h3>A Short Bio</h3>
        <p>Created in 2000 Jamie MacCormack has 35 years in the masonry field. Starting off at the age of 16 building houses for his uncle, he learned the craft of the trade before concrete saws and grinders were even a thing. Moving into his twenties he was working on massive commercial projects, it wasn’t till his thirties that he started to really master the trade working for a restoration company doing commercial and residential jobs.</p>
      </article>

      <article class="medium-4 medium-push-4 columns end">
        <h3>Experience</h3>
        <p>A mason since 1972</p>

        <ul>
          <li id="exp__count1">43 Years brick laying</li>
          <li>38 Years laying block</li>
          <li>35 Years laying stone</li>
        </ul>
      </article>
    </section>

    <section id="counters" class="counters row medium-collapse">
      <div class="medium-3 columns">
        <h2 id="counter" class="counter" data-decimals="0" data-to="140" data-speed="1000"></h2>
        <p>Clients</p>
      </div>
      <div class="medium-3 columns">
        <h2 id="counter" class="counter" data-decimals="0" data-to="160" data-speed="1200"></h2>
        <p>Projects finished</p>
      </div>
      <div class="medium-3 columns">
        <h2 id="counter" class="counter" data-decimals="0" data-to="219145" data-speed="1000"></h2>
        <p>Hours of experience</p>
      </div>
      <div class="medium-3 columns">
        <h2 id="counter" class="counter counter__inline" data-decimals="0" data-to="1000" data-speed="1200"></h2>
        <span class="counter__plus">+</span>
        <p>Bricks salvaged</p>
      </div>
    </section>

    <div class="btn__container">
        <a class="btn inline" href="services">
          <span class="btn__subtitle">View some of our</span>
          <span>Services</span>
        </a>
        <a class="btn inline" href="contact">
          <span class="btn__subtitle">Contact us now</span>
          <span>Free Estimates</span>
        </a>
      </div>

  </main>

<?php include('footer.php'); ?>
