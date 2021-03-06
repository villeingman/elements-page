import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  selector: 'my-area-chart-percentage-area-component',
  template: `
  <vaadin-area-chart id="percentage-area">
  <chart-title>Historic World Population by Region</chart-title>
  <subtitle>Source: Wikipedia.org</subtitle>
  <x-axis tickmark-placement="on">
    <categories>1750, 1800, 1850, 1900, 1950, 1999, 2050</categories>
    <title enabled="false"></title>
  </x-axis>
  <y-axis min="0">
    <title>Percent</title>
  </y-axis>
  <tooltip shared="true" point-format="<span style=&quot;color:{series.color}&quot;>{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:.0f} millions)<br/>"></tooltip>
  <plot-options>
    <series stacking="percent" line-width="1">
    </series>
  </plot-options>
  <legend layout="vertical" align="right" vertical-align="top" x="-40" y="80" floating="true" border-width="1" background-color="#FFFFFF" shadow="true"></legend>
  <data-series name="Asia">
    <data>502, 635, 809, 947, 1402, 3634, 5268</data>
  </data-series>
  <data-series name="Africa">
    <data>106, 107, 111, 133, 221, 767, 1766</data>
  </data-series>
  <data-series name="Europe">
    <data>163, 203, 276, 408, 547, 729, 628</data>
  </data-series>
  <data-series name="America">
    <data>18, 31, 54, 156, 339, 818, 1201</data>
  </data-series>
  <data-series name="Oceania">
    <data>2, 2, 2, 6, 13, 30, 46</data>
  </data-series>
</vaadin-area-chart>
  `,
  directives: [ PolymerElement('vaadin-area-chart') ]
})

export class MyAreaChartPercentageAreaComponent {

}
