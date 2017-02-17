package com.app.model;

import org.joda.time.DateTime;
public class HeartBeatResponse {
    DateTime current;

    public HeartBeatResponse(DateTime current){
        this.current = current;
    }

    public DateTime getCurrent() {
        return current;
    }

}
