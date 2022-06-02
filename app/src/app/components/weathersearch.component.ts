/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-weathersearch',
  templateUrl: './weathersearch.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class weathersearchComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_ndVujko1ysqPBK7K(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ndVujko1ysqPBK7K(bh) {
    try {
      bh = this.sd_QcfXY9LNTyVrW465(bh);
      //appendnew_next_sd_ndVujko1ysqPBK7K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ndVujko1ysqPBK7K');
    }
  }

  updateLog(logobject: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { logobject: logobject };
      bh.local = {};
      bh = this.sd_P3RwUF0TcpI6l66g(bh);
      //appendnew_next_updateLog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5hFPNsXOqJh3mXn5');
    }
  }

  processWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = {};
      bh = this.sd_n9dao3mJSgNzQEAa(bh);
      //appendnew_next_processWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nQkDWZdlhSm3QwVk');
    }
  }

  getWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = { ssdWeatherApiUrl: undefined };
      bh = this.cityNameNullCheck(bh);
      //appendnew_next_getWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s1vNeWU8rO48HdeE');
    }
  }

  //appendnew_flow_weathersearchComponent_start

  sd_QcfXY9LNTyVrW465(bh) {
    try {
      this.page.searchString = undefined;
      //appendnew_next_sd_QcfXY9LNTyVrW465
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QcfXY9LNTyVrW465');
    }
  }

  sd_P3RwUF0TcpI6l66g(bh) {
    try {
      const page = this.page;
      page.logArray.push(bh.input.logobject);
      //appendnew_next_sd_P3RwUF0TcpI6l66g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P3RwUF0TcpI6l66g');
    }
  }

  sd_n9dao3mJSgNzQEAa(bh) {
    try {
      const page = this.page;
      this.page.showCard =
        typeof this.page.weatherdata === 'object' &&
        Object.keys(this.page.weatherdata).length > 2;
      bh = this.sd_SmhoxhZTzXhDZosj(bh);
      //appendnew_next_sd_n9dao3mJSgNzQEAa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n9dao3mJSgNzQEAa');
    }
  }

  async sd_SmhoxhZTzXhDZosj(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          this.page.showCard,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.errorLog(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4M14zFbkALnzlQHf(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SmhoxhZTzXhDZosj');
    }
  }

  errorLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.bh.input.errorlog);

      //appendnew_next_errorLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bksPt1q1u5txLWHS');
    }
  }

  sd_4M14zFbkALnzlQHf(bh) {
    try {
      const page = this.page;
      localStorage.lastCity = bh.input.cityName;
      bh.input.successlog = {
        type: 'info',
        message:
          'Successfully Retrieved the Weather Data for city: ' +
          bh.input.cityName,
      };
      bh = this.successLog(bh);
      //appendnew_next_sd_4M14zFbkALnzlQHf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4M14zFbkALnzlQHf');
    }
  }

  successLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.bh.input.successlog);

      //appendnew_next_successLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LdYvuVRUzulnSLx3');
    }
  }

  sd_lhzyyyLlFoJBi2a8(bh) {
    try {
      const page = this.page;
      bh.input.errorlog = {
        type: 'error',
        message: `Weather Data Not Found${
          bh.input.cityName ? ` For the City: ${bh.input.cityName}` : ''
        }!`,
      };
      bh = this.errorLog(bh);
      //appendnew_next_sd_lhzyyyLlFoJBi2a8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lhzyyyLlFoJBi2a8');
    }
  }

  cityNameNullCheck(bh) {
    try {
      if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_fw1KGkq1mgZfkN9d(bh);
      } else if (
        this.sdService.operators['null'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_fw1KGkq1mgZfkN9d(bh);
      } else if (
        this.sdService.operators['empty'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_fw1KGkq1mgZfkN9d(bh);
      } else if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'string',
          undefined,
          undefined
        )
      ) {
        bh = this.constructApiUrl(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qmQ2REdG7ZttlzOl');
    }
  }

  sd_fw1KGkq1mgZfkN9d(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Invalid City Name', 'Okay', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_fw1KGkq1mgZfkN9d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fw1KGkq1mgZfkN9d');
    }
  }

  constructApiUrl(bh) {
    try {
      const page = this.page;
      bh.local.ssdWeatherApiUrl = `${bh.system.environment.properties.ssdURL}weather`;
      bh.local.qparams = {
        cityName: bh.input.cityName,
      };
      bh = this.callServerFlow(bh);
      //appendnew_next_constructApiUrl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xnCGQcnTn5pOzvio');
    }
  }

  async callServerFlow(bh) {
    try {
      let requestOptions = {
        url: bh.local.ssdWeatherApiUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: { 'bh.local.': 'qparams' },
        body: undefined,
      };
      this.page.weatherdata = await this.sdService.nHttpRequest(requestOptions);
      this.sd_JmajBappTpelM7tJ(bh);
      bh = this.callProcessWeather(bh);
      //appendnew_next_callServerFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rkDcaYUMUy8RVewQ');
    }
  }

  sd_JmajBappTpelM7tJ(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.ssdWeatherApiUrl);
      //appendnew_next_sd_JmajBappTpelM7tJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JmajBappTpelM7tJ');
    }
  }

  callProcessWeather(bh) {
    try {
      let outputVariables = this.processWeather(bh.input.cityName);

      //appendnew_next_callProcessWeather
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xHb44hUJUrk80QGu');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_nLRsWAqAbBSsXDD5(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_nLRsWAqAbBSsXDD5(bh) {
    const nodes = ['sd_n9dao3mJSgNzQEAa'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_lhzyyyLlFoJBi2a8(bh);
      //appendnew_next_sd_nLRsWAqAbBSsXDD5
      return true;
    }
    return false;
  }
  //appendnew_flow_weathersearchComponent_Catch
}
