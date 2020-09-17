require("@babel/polyfill");
import Search from "./model/Search";

/**
 * web app төлөв
 * -хайлтын query, үр дүн
 * -Тухай үзүүлж байгаа жор
 * -Лайкласан жорууд
 * -Захиалж байгаа жорын найрлаганууд
 */

const state = {};
const controlSearch = async () => {
  // 1. вэбээс хайлтын түлхүүр үг авна
  const query = "pizza";

  if (query) {
    // 2. Шинээр хайлтын обектийг үүсгэж өгнө
    state.search = new Search(query);

    // 3. Хайлт хийхэд зориулж дэлгэцийг билдэнэ
    // 4. Хайлтийг гүйцэтгэн
    await state.search.doSearch();
    // 5. Хайлтын үр дүнг дэлгэцэнд хэвлэн
    console.log(state.search.result);
  }
};
document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
