# WordCloudJS
WordCloudJS ist ein JavaScript Framework zur Generierung von Wortwolken.
## API
### WordCloudJS.core

<p class=MsoNormal>Die Kernklasse des WordCloudJS Frameworks. <span
style='mso-bidi-font-size:12.0pt;line-height:130%'>Erzeugt eine Instanz der
Klasse WordCloudJS.word.<o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'><o:p>&nbsp;</o:p></span></p>
<p class=MsoNormal><span style='font-family:Consolas'>new WordcloudJS();<o:p></o:p></span></p>
<p class=MsoNormal><o:p>&nbsp;</o:p></p>
<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width="100%"
 style='width:100.0%;border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width="100%" valign=top style='width:100.0%;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:normal;
  mso-yfti-cnfc:1'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:1.0pt'>
  <td width="100%" valign=top style='width:100.0%;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:normal;
  mso-pagination:none'><span style='font-size:10.0pt;font-family:"Arial",sans-serif'>object
  :WordCloudJS.core<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

#### loadFonts(webFontConfig, ready)

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Lädt
Schriftarten mithilfe des Web Font Loader. <o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=113 valign=top style='width:84.8pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:normal;
  mso-yfti-cnfc:1'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=57 valign=top style='width:42.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:normal;
  mso-yfti-cnfc:1'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:normal;
  mso-yfti-cnfc:1'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;height:140.35pt'>
  <td width=113 valign=top style='width:84.8pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:140.35pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>webFontConfig<o:p></o:p></span></p>
  </td>
  <td width=57 valign=top style='width:42.55pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:140.35pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif;color:#3B3838;mso-themecolor:background2;
  mso-themeshade:64'>object<o:p></o:p></span></p>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:140.35pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>Konfigurationsobjekt des Web Font Loaders. <o:p></o:p></span></p>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>(Siehe </span><a
  href="https://github.com/typekit/webfontloader"><span style='font-size:10.0pt;
  line-height:115%;font-family:"Arial",sans-serif;color:black;mso-themecolor:
  text1;text-decoration:none;text-underline:none'>https://github.com/typekit/webfontloader</span></a><span
  class=MsoHyperlink><span style='font-size:10.0pt;line-height:115%;font-family:
  "Arial",sans-serif;color:#262626;mso-themecolor:text1;mso-themetint:217'>)</span></span><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p></o:p></span></p>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>Beispiel:</span></p>
  <div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
  background:white;mso-background-themecolor:background1;margin-left:5.65pt;
  margin-right:5.65pt'>
  <p class=CodeZeileCxSpFirst style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;line-height:115%;
  mso-pagination:none;background:white;mso-background-themecolor:background1'>WebFontConfig
  = {</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;line-height:115%;
  mso-pagination:none;background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>custom: {</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;line-height:115%;
  mso-pagination:none;background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>        </span>families: [</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;line-height:115%;
  mso-pagination:none;background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>            </span>'My Font', </p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;line-height:115%;
  mso-pagination:none;background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>            </span>'My Other Font'</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;line-height:115%;
  mso-pagination:none;background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>        </span>],</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;line-height:115%;
  mso-pagination:none;background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>        </span>urls: ['/fonts.css']</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;line-height:115%;
  mso-pagination:none;background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>}</p>
  <p class=CodeZeileCxSpLast style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;line-height:115%;
  mso-pagination:none;background:white;mso-background-themecolor:background1'>};<span
  style='font-family:"LM Roman 10"'><o:p></o:p></span></p>
  </div>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
  <td width=113 valign=top style='width:84.8pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>ready<o:p></o:p></span></p>
  </td>
  <td width=57 valign=top style='width:42.55pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>event<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Wird
  ausgeführt, wenn alle Schriftarten geladen wurden.<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>getWordTableFromText(text, language)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Extrahiert
Wörter aus einem Text mit Berücksichtigung der Sprache und der jeweiligen
Stoppwörter der Sprache und ermittelt die Gewichtung der Wörter anhand der
Anzahl der Vorkommnisse jedes Worts in Relation zur Gesamtanzahl der Wörter. <o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'><o:p>&nbsp;</o:p></span></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:2.85pt'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:2.85pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:2.85pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:2.85pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>text<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<b
  style='mso-bidi-font-weight:normal'><o:p></o:p></b></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Eingabetext<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>language<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<b
  style='mso-bidi-font-weight:normal'><o:p></o:p></b></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Sprache
  des eingegebenen Texts. Es werden die Sprachen &quot;german&quot; und
  &quot;english&quot; unterstützt<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:3.85pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:3.85pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:159.85pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:159.85pt'>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>Gibt ein Objekt
  zurück mit einer Liste der extrahierten Wörter und ihrer Gewichtung<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>Beispiel:<o:p></o:p></span></p>
  <div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
  background:white;mso-background-themecolor:background1;margin-left:5.65pt;
  margin-right:5.65pt'>
  <p class=CodeZeileCxSpFirst style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>{</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>   </span>wordCount: 100,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>   </span>minWordCount: 1,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>   </span>maxWordCount: 16,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>   </span>wordTable: {</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>                 </span>text: &quot;Wortwolke&quot;,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>                 </span>count: 14</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>              </span>}</p>
  <p class=CodeZeileCxSpLast style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>}</p>
  </div>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>createWord(options)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Erzeugt
eine Instanz der Klasse WordCloudJS.word. Für weitere Informationen siehe
WordCloudJS.word.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>options<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordCloudJS.word <o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='margin-left:5.65pt;line-height:normal;mso-yfti-cnfc:
  1'><b style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-left:5.65pt;line-height:normal;mso-pagination:
  none'><span style='font-size:10.0pt;font-family:"Arial",sans-serif'>object
  :WordCloudJS.word<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>getSpiralPath(distPoints, distCoils, maxRadius, startX, startY)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Generiert
einen Pfad einer Spirale.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>distPoints<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<b
  style='mso-bidi-font-weight:normal'><o:p></o:p></b></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Abstand
  zwischen den Punkten in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>distCoils<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<b
  style='mso-bidi-font-weight:normal'><o:p></o:p></b></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Abstand
  zwischen den Windungen in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>maxRadius<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Maximaler
  Radius in Pixeln. Wenn die Distanz eines Punktes zum Ursprung der Spirale
  überschreitet, werden keine weiteren Punkte mehr berechnet.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>startX<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>X-Koordinate
  des Ursprungs der Spirale in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>startY<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>Y-Koordinate des
  Ursprungs der Spirale in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:18.75pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:18.75pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif;color:#3B3838;mso-themecolor:background2;
  mso-themeshade:64'>array<o:p></o:p></span></p>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif;color:#3B3838;mso-themecolor:background2;
  mso-themeshade:64'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>Gibt ein Array mit allen ermittelten Punkten
  beginnend vom Ursprung der Spirale zurück.<o:p></o:p></span></p>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>Beispiel:<o:p></o:p></span></p>
  <div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
  background:white;mso-background-themecolor:background1;margin-left:5.65pt;
  margin-right:5.65pt'>
  <p class=CodeZeile style='margin-top:6.0pt;margin-right:0cm;margin-bottom:
  6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;background:white;
  mso-background-themecolor:background1'>[ {x: 0, y: 0}, … ]</p>
  </div>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>getRectSpiralPath(distPoints, distCoils, maxRadius, startX, startY)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Generiert
einen Pfad einer rechteckigen Spirale.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>distPoints<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<b
  style='mso-bidi-font-weight:normal'><o:p></o:p></b></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>Abstand zwischen den Punkten in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>distCoils<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<b
  style='mso-bidi-font-weight:normal'><o:p></o:p></b></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>Abstand zwischen den Windungen in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>maxRadius<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>Maximaler Radius in Pixeln. Wenn die Distanz
  eines Punktes zum Ursprung der Spirale überschreitet, werden keine weiteren
  Punkte mehr berechnet.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>startX<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>X-Koordinate des Ursprungs der Spirale in
  Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>startY<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>Y-Koordinate des Ursprungs der Spirale in
  Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:3.9pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:3.9pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:18.75pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:18.75pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif;
  color:#3B3838;mso-themecolor:background2;mso-themeshade:64'>array<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif;
  color:#3B3838;mso-themecolor:background2;mso-themeshade:64'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Gibt
  ein Array mit allen ermittelten Punkten beginnend vom Ursprung der Spirale
  zurück.<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Beispiel:<o:p></o:p></span></p>
  <div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
  background:white;mso-background-themecolor:background1;margin-left:5.65pt;
  margin-right:5.65pt'>
  <p class=CodeZeile style='margin-top:6.0pt;margin-right:0cm;margin-bottom:
  6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;background:white;
  mso-background-themecolor:background1'>[ {x: 0, y: 0}, … ]</p>
  </div>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>createScene(path)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Erzeugt
eine Instanz der Klasse WordCloudJS.scene. Für weitere Informationen siehe
WordCloudJS.scene.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:1.0pt'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>path <o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>Siehe WordCloudJS.scene <o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='mso-bidi-font-size:12.0pt;line-height:130%;font-family:"LM Sans 10"'><o:p>&nbsp;</o:p></span></b></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object
  :WordCloudJS.scene<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>downloadSVG(svg)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Generiert
einen Pfad einer rechteckigen Spirale.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>svg<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Javascript
  SVG Element<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:4.5pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:4.5pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:18.75pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:18.75pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>.svg-Datei<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Löst
  einen Download des SVGs im Browser aus.<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>drawPath(ctx, path, drawLines, lineColor, drawPoints, pointColor,
pointRadius)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Zeichnet
einen Pfad auf einen Canvas. Diese Methode kann zum Debugging verwendet werden.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>ctx<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>HTML
  Canvas-2D-Kontext<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>path<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Generierter
  Pfad. Siehe Ausgabe von <o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>WordCloudJS.core.getSpiralPath<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>drawLines<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boolean<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Sollen
  die Punkte mit einer Linie verbunden werden?<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>lineColor<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Farbe
  der Linien im Hex-Format<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>drawPoints<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boolean<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Sollen
  die Punkte gezeichnet werden?<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>pointColor<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Farbe
  der Punkte im Hex-Format<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;mso-yfti-lastrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>pointRadius<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Radius
  der Punkte<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=AnhangH2>WordCloudJS.scene</p>

<p class=MsoNormal>Die Klasse WordCloudJS.scene beinhaltet Methoden zur
Generierung und Zeichnung einer Szene. <span style='mso-bidi-font-size:12.0pt;
line-height:130%'>Erzeugt eine Instanz der Klasse WordCloudJS.scene. <o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span style='font-family:Consolas'>new WordcloudJS.scene(path);<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>path<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>array<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordCloudJS.core.getSpiralPath<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Attribut<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>path<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>array<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordCloudJS.core.getSpiralPath<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>words<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>array<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Eine
  Liste aller Wörter, die zur Szene hinzugefügt und bereits positioniert
  wurden.<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object
  :WordCloudJS.scene<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>addWord (word, position, minMargin)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Ermittelt
eine Position für ein Wort und fügt es zur Szene hinzu.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>word<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordCloudJS.word<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>position<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Die
  horizontale Ausrichtung des Wortes zum Einfügepunkt: <o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>“center“,
  “left“, “right“<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>minMargin<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Minimaler
  Abstand, der zwischen Worten bei der Positionierung eingehalten werden soll. <o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>getSvg(id)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Zeichnet
die Szene als SVG.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>id<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>CSS-ID
  des SVG<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:18.75pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:18.75pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Liefert
  ein Javascript SVG-Element zurück.<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>getCanvas(id)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Zeichnet
die Szene in ein Canvas und gibt den Canvas zurück.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes'>
  <td width=104 valign=top style='width:77.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>id<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=359 valign=top style='width:269.0pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>CSS-ID des <o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:18.75pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:18.75pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Liefert
  ein Javascript Canvas-Objekt zurück.<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>boundingVolumeCollision(boundingVolume1, boundingVolume2, minMargin)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Prüft
zwei Bounding-Volumes auf Kollision. <o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Wird
von WordCloudJS.scene.boundingVolumeHierarchyCollision<b style='mso-bidi-font-weight:
normal'> </b>verwendet</span><span style='mso-bidi-font-size:12.0pt;line-height:
130%;font-family:"LM Sans 10"'>.</span><span style='mso-bidi-font-size:12.0pt;
line-height:130%'><o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=132 valign=top style='width:99.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=330 valign=top style='width:247.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=132 valign=top style='width:99.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boundingVolume1<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=330 valign=top style='width:247.75pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordcloudJS.boundingVolume<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=132 valign=top style='width:99.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boundingVolume2<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=330 valign=top style='width:247.75pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordcloudJS.boundingVolume<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes'>
  <td width=132 valign=top style='width:99.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>minMargin<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=330 valign=top style='width:247.75pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Minimaler
  Abstand zwischen den Bounding-Volumes<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:18.75pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:18.75pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boolean<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Überschneiden
  sich die Bounding-Volumes?<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>boundingVolumeHierarchyCollision(boundingVolume1, boundingVolume2,
minMargin, result)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Prüft
zwei Bounding-Volume-Hierarchien rekursiv auf Kollision.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=132 valign=top style='width:99.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=330 valign=top style='width:247.75pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=132 valign=top style='width:99.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boundingVolume1<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<b
  style='mso-bidi-font-weight:normal'><o:p></o:p></b></span></p>
  </td>
  <td width=330 valign=top style='width:247.75pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordcloudJS.boundingVolume<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=132 valign=top style='width:99.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boundingVolume2<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=330 valign=top style='width:247.75pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordcloudJS.boundingVolume<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes'>
  <td width=132 valign=top style='width:99.0pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>minMargin<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=330 valign=top style='width:247.75pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  mso-pagination:none'><span style='font-size:10.0pt;line-height:115%;
  font-family:"Arial",sans-serif'>Minimaler Abstand zwischen den
  Bounding-Volumes<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:18.75pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:18.75pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif;
  color:#3B3838;mso-themecolor:background2;mso-themeshade:64'>boolean<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif;
  color:#3B3838;mso-themecolor:background2;mso-themeshade:64'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Überschneiden
  sich die Bounding-Volumes-Hierarchien?<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=AnhangH2>WordCloudJS.word</p>

<p class=MsoNormal>Die Klasse WordCloudJS.word erzeugt ein Wort. <span
style='mso-bidi-font-size:12.0pt;line-height:130%'>Erzeugt eine Instanz von der
Klasse WordCloudJS.word. <o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<p class=MsoNormal><span style='font-family:Consolas'>new WordcloudJS.word();<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black;mso-themecolor:text1'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>options<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>objekt<b
  style='mso-bidi-font-weight:normal'><o:p></o:p></b></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Optionen
  für das Generieren eines Worts.<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Beispiel:<o:p></o:p></span></p>
  <div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
  background:white;mso-background-themecolor:background1;margin-left:5.65pt;
  margin-right:5.65pt'>
  <p class=CodeZeileCxSpFirst style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>options = {</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>text: 'text',</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>id: 'cssId',</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>class: 'cssClass',</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>boundingVolumeMinSize: 8,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>style: {</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>        </span>'fontStyle': 'italic',</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>        </span>'fontVariant': 'normal',</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>        </span>'fontWeight': 'bold',</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>        </span>'fontSize': 14,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>        </span>'fontFamily': 'Arial',</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>      </span><span
  style='mso-spacerun:yes'>  </span>'fontColor': '#000000'</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>}</p>
  <p class=CodeZeileCxSpLast style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>}</p>
  </div>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:3.45pt'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:3.45pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Attribut<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:3.45pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:3.45pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>text<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordCloudJS.core.getSpiralPath<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>id<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>CSS-ID
  des Worts, wenn das Wort als SVG auf eine Szene gezeichnet wird.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>class<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>CSS-Klasse
  des Worts, wenn das Wort als SVG auf eine Szene gezeichnet wird.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boundingVolumeMinSize<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Minimale
  Größe, die die Höhe oder Breite eines Bounding-Volumes der
  Bounding-Volume-Hierarchie des Worts haben soll.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>style<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Stil
  des Worts.<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Beispiel:
  Siehe Konstruktor.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>position<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Position
  des Worts.<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Beispiel:<o:p></o:p></span></p>
  <div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
  background:white;mso-background-themecolor:background1;margin-left:5.65pt;
  margin-right:5.65pt'>
  <p class=CodeZeile style='margin-top:6.0pt;margin-right:0cm;margin-bottom:
  6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;background:white;
  mso-background-themecolor:background1'>{x:0, y:0}</p>
  </div>
  </td>
 </tr>
 <tr style='mso-yfti-irow:6'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>width<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Breite
  des Worts in Pixeln.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:7'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>height<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Höhe
  des Worts in Pixeln.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:8'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>angle<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Winkelgrad
  des Worts.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:9'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>anchorOffsetX<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Abstand
  zwischen Ankerpunkt, wenn das Wort auf ein Canvas gezeichnet wird, und erstem
  gefüllten Pixel in X-Richtung.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:10'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>anchorOffsetY<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Abstand
  zwischen Ankerpunkt, wenn das Wort auf ein Canvas gezeichnet wird, und erstem
  gefüllten Pixel in Y-Richtung.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:11'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>rotationAnchorX<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>X-Koordinate
  des Rotationspunkts.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:12'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>rotationAnchorY<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Y-Koordinate
  des Rotationspunkts.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:13'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>imageData<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>array<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Pixeldaten
  des Worts im <o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Uint8Array-Format<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:14'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>imageData32<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>array<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Pixeldaten
  des Worts im <o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Uint32Array-Format<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:15;mso-yfti-lastrow:yes'>
  <td width=170 valign=top style='width:127.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boundingVolume<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=293 valign=top style='width:219.4pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Siehe
  WordCloudJS.boundingVolume<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object
  :WordCloudJS.word<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>hasPixelsInBox (sx, sy, width, height)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Prüft,
ob sich Pixel in einem bestimmten rechteckigen Bereich des Worts befinden.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>sx<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>X-Koordinate
  in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>sy<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Y-Koordinate
  in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>width<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Breite
  in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;mso-yfti-lastrow:yes'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>height<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Höhe
  in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:18.75pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:18.75pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Boolean<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Sind
  Pixel in diesem Bereich des Worts vorhanden?<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>move (x, y)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Verschiebt
das Wort auf eine Position.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>x<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>X-Koordinate
  in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>y<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Y-Koordinate
  in Pixeln<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>getMinMax()</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Ermittelt
die minimalsten und maximalsten X- und Y-Werte des Worts. <o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:91.05pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:91.05pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Beispiel:<o:p></o:p></span></p>
  <div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
  background:white;mso-background-themecolor:background1;margin-left:5.65pt;
  margin-right:5.65pt'>
  <p class=CodeZeileCxSpFirst style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>{</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>minX: 0,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>maxX: 150,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>minY: 0,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>maxY: 100,</p>
  <p class=CodeZeileCxSpLast style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>}</p>
  </div>
  </td>
 </tr>
</table>

<p class=MsoNormal style='line-height:150%'><o:p>&nbsp;</o:p></p>

<h4>drawWordOnCanvas (drawBoundingVolume)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Zeichnet
das Wort und die Bounding-Volume-Hierarchie auf einen Canvas und gibt den
Canvas zurück. Diese Methode kann zum Debugging verwendet werden.<o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'><o:p>&nbsp;</o:p></span></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=151 valign=top style='width:113.15pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=311 valign=top style='width:233.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes'>
  <td width=151 valign=top style='width:113.15pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>drawBoundingVolume<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.65pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=311 valign=top style='width:233.55pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Optionen
  für das zusätzliche Zeichnen der Bounding-Volume-Hierarchie des Worts. Wenn
  dieser Parameter nicht mitgegeben wird, wird nur das Wort, ohne die
  Bounding-Volume-Hierarchie gezeichnet.<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><span
  style='mso-spacerun:yes'> </span><o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>drawOption:
  <o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>'all'
  <o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Zeichnet
  alle Bounding-Volumes<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>'filled'
  <o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Zeichnet
  nur Bounding-Volumes, die gefüllte Pixel enthalten.<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>'empty'<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Zeichnet
  nur Bounding-Volumes, die keine Pixel enthalten<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>fill:<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Sollen
  die Bounding-Volumes mit Farbe gefüllt werden?<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Beispiel:<o:p></o:p></span></p>
  <div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
  background:white;mso-background-themecolor:background1;margin-left:5.65pt;
  margin-right:5.65pt'>
  <p class=CodeZeileCxSpFirst style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>{</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>color: '#ff0000',</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>fill: false,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>drawOption: 'filled'</p>
  <p class=CodeZeileCxSpLast style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>}</p>
  </div>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:11.3pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:11.3pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Liefert
  Javascript Canvas-Objekt zurück.<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=AnhangH2>WordCloudJS.boundingVolume</p>

<p class=MsoNormal>Die Klasse WordCloudJS.boundingVolume definiert ein
Bounding-Volume eines Worts und generiert eine Bounding-Hierarchie. <span
style='mso-bidi-font-size:12.0pt;line-height:130%'>Erzeugt eine Instanz der
Klasse WordCloudJS.</span>boundingVolume<span style='mso-bidi-font-size:12.0pt;
line-height:130%'>. <o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<p class=MsoNormal><span style='font-family:Consolas'>new WordcloudJS.boundingVolume(option);<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>option<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Optionen,
  die das Bounding-Volume definieren. Ein Bounding-Volume wird durch eine
  Position (linke obere Ecke) mit den Koordinaten x und y sowie eine Höhe und
  eine Breite definiert. Jedes Bounding-Volume ist immer einem Wort zugeordnet.<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Beispiel:<o:p></o:p></span></p>
  <div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
  background:white;mso-background-themecolor:background1;margin-left:5.65pt;
  margin-right:5.65pt'>
  <p class=CodeZeileCxSpFirst style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>{</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>word: word,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>x: 0,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>y: 0,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>width: 100,</p>
  <p class=CodeZeileCxSpMiddle style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'><span
  style='mso-spacerun:yes'>    </span>height: 100</p>
  <p class=CodeZeileCxSpLast style='margin-top:6.0pt;margin-right:0cm;
  margin-bottom:6.0pt;margin-left:0cm;mso-add-space:auto;mso-pagination:none;
  background:white;mso-background-themecolor:background1'>}</p>
  </div>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Attribut<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>word<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>Siehe WordCloudJS.word<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>x<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>X-Koordinate der Position
  des Bounding-Volumes<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>y<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>Y-Koordinate der Position des
  Bounding-Volumes<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>width<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>Breite des Bounding-Volumes<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>height<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>number<o:p></o:p></span></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>Höhe des Bounding-Volumes<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>children<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>array<o:p></o:p></span></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>Bounding-Volumes, die sich
  innerhalb von diesen Bounding-Volume befinden. Das Array enthält immer zwei
  oder keine Elemente, da ein Bounding-Volume immer in der hälfte geteilt wird
  oder garnicht.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;mso-yfti-lastrow:yes'>
  <td width=85 valign=top style='width:63.55pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>isFilled<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>boolean<o:p></o:p></span></p>
  </td>
  <td width=378 valign=top style='width:283.2pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>Enthält das Bounding-Volume
  gefüllte Pixel?<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object
  :WordCloudJS.boundingVolume<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='line-height:150%'><o:p>&nbsp;</o:p></p>

<h4>hasChildren ()</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Ermittelt,
ob sich weitere Bounding-Volumes innerhalb des Bounding-Volumes befinden.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0 width=528
 style='width:396.35pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
 191;mso-yfti-tbllook:1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt;height:1.0pt'>
  <p class=MsoNormal align=left style='text-align:left;line-height:normal;
  mso-yfti-cnfc:1'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif'>Ausgabe<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;mso-yfti-lastrow:yes;height:1.0pt'>
  <td width=528 valign=top style='width:396.35pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt;
  height:1.0pt'>
  <p class=MsoNormal style='mso-pagination:none'><span style='font-size:10.0pt;
  line-height:130%;font-family:"Arial",sans-serif'>boolean<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>traverse(func, param)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Durchläuft
rekursiv ein Bounding-Volume und alle Bounding-Volumes, die sich innerhalb des
Bounding-Volumes befinden, und führt eine Operation aus.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>func<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>function<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Operation,
  die für jedes Bounding-Volume ausgeführt werden soll. Die Funktion muss zwei
  Parameter besitzen:<o:p></o:p></span></p>
  <p class=MsoListParagraphCxSpFirst style='text-indent:-18.0pt;line-height:
  115%;mso-pagination:none;mso-list:l7 level1 lfo4'><![if !supportLists]><span
  style='font-size:10.0pt;line-height:115%;font-family:"LM Roman 10";
  mso-fareast-font-family:"LM Roman 10";mso-bidi-font-family:"LM Roman 10"'><span
  style='mso-list:Ignore'>-<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span></span><![endif]><span style='font-size:10.0pt;line-height:
  115%;font-family:"Arial",sans-serif'>Instanz des Bounding-Volumes<o:p></o:p></span></p>
  <p class=MsoListParagraphCxSpLast style='text-indent:-18.0pt;line-height:
  115%;mso-pagination:none;mso-list:l7 level1 lfo4'><![if !supportLists]><span
  style='font-size:10.0pt;line-height:115%;font-family:"LM Roman 10";
  mso-fareast-font-family:"LM Roman 10";mso-bidi-font-family:"LM Roman 10"'><span
  style='mso-list:Ignore'>-<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span></span><![endif]><span style='font-size:10.0pt;line-height:
  115%;font-family:"Arial",sans-serif'>Javascript-Objekt mit individuellen
  Parametern<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Diese
  werden beim Ausführen der Rekursion von traverse() der Funktion func
  übergeben.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>param<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Objekt
  mit individuellen Parametern, die der Funktion func übergeben werden.<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<h4>drawBoundingVolume(ctx, color, fill, drawOption)</h4>

<p class=MsoNormal><span style='mso-bidi-font-size:12.0pt;line-height:130%'>Zeichnet
ein Bounding-Volume auf ein Canvas. Diese Methode kann zum Debugging verwendet
werden.<o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<table class=TabelleBachelor border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid #AEAAAA .5pt;
 mso-border-themecolor:background2;mso-border-themeshade:191;mso-yfti-tbllook:
 1568;mso-padding-alt:0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;mso-border-alt:
  solid #AEAAAA .5pt;mso-border-themecolor:background2;mso-border-themeshade:
  191;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Parameter<o:p></o:p></span></b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Typ<o:p></o:p></span></b></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-left:none;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:normal;mso-yfti-cnfc:1'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif'>Beschreibung<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>ctx<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>object<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Canvas
  2D-Kontext<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>color<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Farbe
  im Hex-Format<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>fill<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>boolean<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Soll
  das Bounding-Volume gefüllt werden?<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;mso-yfti-lastrow:yes'>
  <td width=94 valign=top style='width:70.65pt;border:solid #AEAAAA 1.0pt;
  mso-border-themecolor:background2;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #AEAAAA .5pt;mso-border-top-themecolor:background2;
  mso-border-top-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>drawOption<o:p></o:p></span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>string<o:p></o:p></span></p>
  </td>
  <td width=368 valign=top style='width:276.1pt;border-top:none;border-left:
  none;border-bottom:solid #AEAAAA 1.0pt;mso-border-bottom-themecolor:background2;
  mso-border-bottom-themeshade:191;border-right:solid #AEAAAA 1.0pt;mso-border-right-themecolor:
  background2;mso-border-right-themeshade:191;mso-border-top-alt:solid #AEAAAA .5pt;
  mso-border-top-themecolor:background2;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #AEAAAA .5pt;mso-border-left-themecolor:background2;
  mso-border-left-themeshade:191;mso-border-alt:solid #AEAAAA .5pt;mso-border-themecolor:
  background2;mso-border-themeshade:191;padding:2.85pt 5.65pt 2.85pt 5.65pt'>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Option,
  die angibt, welche Eigenschaft das Bounding-Volume haben muss, damit es
  gezeichnet wird.<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><span
  style='mso-spacerun:yes'> </span>'all' <o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Zeichnet
  alle Bounding-Volumes<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>'filled'
  <o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Zeichnet
  nur Bounding-Volumes, die gefüllte Pixel enthalten.<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>'empty'<o:p></o:p></span></p>
  <p class=MsoNormal style='line-height:115%;mso-pagination:none'><span
  style='font-size:10.0pt;line-height:115%;font-family:"Arial",sans-serif'>Zeichnet
  nur Bounding-Volumes, die keine Pixel enthalten<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=AnhangH2>WordCloudJS.stopwords</p>

<p class=MsoNormal>Dieses Objekt beinhaltet Stoppwörter für die Sprachen
deutsch und englisch. Die Stoppwörter werden für das Extrahieren von Wörtern
aus Texten verwendet.</p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<p class=MsoNormal>Deutsche Stoppwörter:</p>

<div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
background:white;mso-background-themecolor:background1;margin-left:5.65pt;
margin-right:5.65pt'>

<p class=CodeZeile style='margin-top:6.0pt;margin-right:0cm;margin-bottom:6.0pt;
margin-left:0cm;mso-add-space:auto;background:white;mso-background-themecolor:
background1'>WordcloudJS.stopwords.german = [“ab“, “aber“, … ];</p>

</div>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<p class=MsoNormal>Englische Stoppwörter:</p>

<div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
mso-border-alt:solid windowtext .5pt;padding:4.0pt 4.0pt 4.0pt 4.0pt;
background:white;mso-background-themecolor:background1;margin-left:5.65pt;
margin-right:5.65pt'>

<p class=CodeZeile style='margin-top:6.0pt;margin-right:0cm;margin-bottom:6.0pt;
margin-left:0cm;mso-add-space:auto;background:white;mso-background-themecolor:
background1'>WordcloudJS.stopwords.english = [“a“, “able“, … ];</p>

</div>

<p class=MsoNormal align=left style='margin-bottom:8.0pt;text-align:left;
line-height:107%'><o:p>&nbsp;</o:p></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<b style='mso-bidi-font-weight:normal'><span style='font-size:20.0pt;
line-height:107%;font-family:"Times New Roman",serif;mso-fareast-font-family:
Calibri;mso-fareast-theme-font:minor-latin;mso-bidi-theme-font:minor-bidi;
color:#0D0D0D;mso-themecolor:text1;mso-themetint:242;mso-ansi-language:DE;
mso-fareast-language:EN-US;mso-bidi-language:AR-SA'><br clear=all
style='mso-special-character:line-break;page-break-before:always'>
</span></b>

<p class=MsoNormal align=left style='margin-bottom:8.0pt;text-align:left;
line-height:107%'><b style='mso-bidi-font-weight:normal'><span
style='font-size:20.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></b></p>
