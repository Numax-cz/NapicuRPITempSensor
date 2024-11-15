<h1 align="center">
  <br>
  <img src="./public/icon-512-512.jpg" alt="NapicuFridge image" width="230">
  <br>
    NapicuRPITempSensor
  <br>
</h1>

- NapicuRPITempSensor je open-source vzdělávací projekt, který se zaměřuje na měření teploty a vlhkosti. 
- Naměřená data jsou vizualizována ve formě grafu na webové stránce. 
- Projekt byl vytvořen s cílem podpořit vzdělávání a praktické učení v oblasti technologií.
---

## Instalace
### Co potřebuji ?
- [Git](https://git-scm.com/)
- [Node - LTS](https://nodejs.org/en/)
- [Python](https://www.python.org/)

### NASTAVENÍ API SERVERU
1. Nainstalujte balíčky pro Python **Flask**, **Flask-Cors**, **Adafruit-DHT**.
- [Flask](https://pypi.org/project/Flask/)
- [flask_cors](https://pypi.org/project/Flask-Cors/)
- [Adafruit-DHT](https://pypi.org/project/Adafruit-DHT/)

### BUILDNUTÍ APLIKACE
1. Pokud jste změnili port API serveru, upravte jej také v souboru `src/app/api.service.ts`.
2. Pomocí příkazu `npm run build` zkompilujeme webové prostředky pro nasazení na web.

