const userList = $("#user-list");

$.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
  $.each(data, function (i, user) {
    // Create list item for each user
    const li = $("<li>")
      .addClass("flex items-center justify-between p-4 user-row")
      .html(
        `<div>
          <h2 class="font-bold">${user.name}</h2>
          <p class="text-black">${user.email}</p>
        </div>
        <span class="text-black">${user.username}</span>`
      );

    // Add click event listener to show alert with name
    li.on("click", function () {
      alert(`User's name is ${user.name}`);
    });

    userList.append(li);
  });
});
