# Roštilj Kod Ujke — Landing Page

Moderan landing page za roštilj u Bojniku.

## Podaci

- Naziv: **Roštilj Kod Ujke**
- Adresa: **17. februara 1, Bojnik**
- Telefon: **065 80 64 713**
- Slogan: **Kod Ujke, zadovoljstvo na dohvat ruke!**

## Novo u ovoj verziji

- Ubačen hero video: `assets/hero-video.mp4`
- Ubačena hero slika/fallback: `assets/hero-pljeskavica.jpg`
- Hero sekcija koristi video pozadinu sa tamnim overlay-om za čitljiv tekst.

## Kako otvoriti u Cursor-u

1. Kloniraj repozitorijum ili koristi postojeći lokalni folder.
2. Otvori folder `rostilj-kod-ujke-landing` u Cursor-u.
3. Otvori `index.html`.
4. Pokreni preko Live Server ekstenzije ili duplim klikom na `index.html`.

## Git repozitorijum

- Repozitorijum: https://github.com/wy4tor/rostilj-kod-ujke
- Remote `origin`: `https://github.com/wy4tor/rostilj-kod-ujke.git`
- Glavna grana: `main` (prati `origin/main`).

Za novu lokalnu kopiju:

```powershell
git clone https://github.com/wy4tor/rostilj-kod-ujke.git rostilj-kod-ujke-landing
cd rostilj-kod-ujke-landing
```

Za kasnije izmene:

```powershell
git status
git add .
git commit -m "Opis izmene"
git push origin main
```

## V4 izmene

- Uklonjeno je 2025 iz celog sajta.
- Uklonjene su slike menija jer je meni već prepisan u HTML sekcije.
- Video je podešen kao fiksirana pozadina koja ostaje dok se skroluje.
- Adresa je klikabilna i otvara mapu bez posebnog pominjanja mapa u tekstu.

## V5 izmene

- Hero natpis „Naruči i pokupi” je podignut i sada je čitljiviji.
- Sva bitna pojavljivanja telefona su klikabilna.
- Svako vidljivo „Naruči” u CTA delovima vodi na poziv telefonom.

## Najnovije izmene

- Podešeni prored i veličine naslova radi sprečavanja preklapanja teksta.
- Pozadinski video je svetliji i vidljiv kroz sekciju brzog biranja; zatamnjenje počinje od sekcije „Meni”.
- Okviri kartica su blago providniji.
- Link „Nazad na vrh” direktno vraća stranicu na početak.
