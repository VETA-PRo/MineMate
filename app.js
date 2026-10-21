
const items = [
  {
    name: "ダイヤモンド",
    icon: "💎",
    description: "装備や道具のクラフトに使う貴重な鉱石。"
  },
  {
    name: "鉄インゴット",
    icon: "🔩",
    description: "鉄鉱石をかまどで精錬して入手できる。"
  },
  {
    name: "たいまつ",
    icon: "🔥",
    description: "石炭または木炭と棒で作れる明かり。"
  },
  {
    name: "作業台",
    icon: "🪵",
    description: "木材4個から作れるクラフト用ブロック。"
  },
  {
    name: "エンダーパール",
    icon: "🟣",
    description: "エンダーマンなどから入手できるアイテム。"
  },
  {
    name: "金インゴット",
    icon: "🟨",
    description: "金鉱石などを精錬して入手できる。"
  }
];

const itemList = document.getElementById("itemList");
const searchInput = document.getElementById("searchInput");

function showItems(keyword = "") {
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(
      keyword.toLowerCase().trim()
    )
  );

  itemList.innerHTML = "";

  if (filteredItems.length === 0) {
    itemList.textContent = "アイテムが見つからないよ。";
    return;
  }

  filteredItems.forEach(item => {
    const card = document.createElement("article");
    card.className = "item-card";

    const title = document.createElement("h3");
    title.textContent = `${item.icon} ${item.name}`;

    const description = document.createElement("p");
    description.textContent = item.description;

    card.append(title, description);
    itemList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  showItems(searchInput.value);
});

showItems();
