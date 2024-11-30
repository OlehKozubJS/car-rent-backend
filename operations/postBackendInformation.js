const postBackendInformation = async (request, response) => {
  const { query } = await request;
  const { first, second } = await query;
  await response.send(
    `<p style="background-color: rgb(220, 220, 240); color: rgb(180, 160, 200);">${first}+${second}=${
      Number(first) + Number(second)
    }</p><a href="/">Main page</a>`
  );
};

module.exports = { postBackendInformation };
