// fetch API or method
// basically fetch can be used for to call third party API or to call pages.
// Internally fetch can use the concept of promise.
// async and await

fetch("header.html")
  .then((res) => {
    return res.text();
    // console.log(res);
  })
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
  })
  .catch((err) => {
    console.error("Something went wrong", err);
  });

fetch("footer.html")
  .then((responese) => {
    return responese.text();
  })
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch((err) => {
    console.error("Something went wrong", err);
  });
