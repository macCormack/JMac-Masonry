<?php
  $ROOT = './';
?>

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact | Free Estimates — JMac Masonry</title>
  <meta name="description" content="Contact us today for a free quote.">

<?php include('header.php'); ?>

<header class="header">
  <h1>get in touch</h1>
  <p>need an estimate? or want to sub-contract us? fill out the form below.</p>
</header>

<main class="main container">
  <section id="form" class="row">
        <form id="contact" class="form" data-abide="ajax" name="contact">

          <div class="form-messages text-center">
            <div id="form__messages" class="form-messages-inner"></div>
          </div>

          <div class="row">
              <div class="large-6 columns">
                <label>Name
                  <input id="name" name="name" type="text" required/>
                </label>
                <small class="error">Please enter a name</small>
              </div>
              <div class="large-6 columns">
                <label>Phone
                  <input id="phone" name="phone" type="text" pattern="\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}" required/>
                </label>
                <small class="error">Hint:416-444-5555</small>
              </div>
            </div>
            <label>Email
              <input id="email" name="email" type="email" required/>
            </label>
            <small class="error">We need a valid email address</small>
            <textarea id="message" name="message" rows="4" placeholder="Message..."required></textarea>
            <small class="error">You must have something to say to us</small>
            <button type="submit">Submit</button>
        </form>


    <!-- <form id="contact" class="form" data-abide="ajax" name="contact">

      <div id="form__messages"></div>

      <div class="contact__container">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required aria-required="true">
      </div>
      <small class="error">Name is required and must be a string.</small>

      <div class="contact__container">
        <label for="phone">Phone</label>
        <input id="phone" type="text" name="phone" pattern="\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}" title="416-222-3333" required aria-required="true">
      </div>

      <div class="contact__container">
        <label for="email">Email</label>
        <input id="email" type="email" name="email" required aria-required="true">
      </div>

      <div class="contact__container">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" required aria-required="true"></textarea>
      </div>

      <button type="submit" value="submit">Submit</button>
    </form> -->

    <aside class="contact__info">
      <ul>
        <li>Phone:&#32;<a href="tel:+14163464129">416-346-4129</a></li>
        <li>Email:&#32;<a href="mailto:info@jmacmasonry.com">info@jmacmasonry.com</a></li>
      </ul>
    </aside>

  </section>
</main>
<?php include ('footer.php'); ?>
