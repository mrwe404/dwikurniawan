function longest(value) {
    return value.replace(/[^A-Za-z0-9 ]/g, '').split(' ').reduce((x, y) => x.length > y.length - 1 ? x : y)
  }

longest("Halo Arkademian!");
longest("Seluruh Arkademian mengucapkan selamat Ramadhan!");
longest("Baju ini sangat bagus sekali!");

