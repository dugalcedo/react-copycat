import CopycatHeader from "./copycat-lib/CopycatHeader.tsx";
import StudentApp from "./StudentApp/StudentApp.tsx";
import TeacherApp from "./TeacherApp/TeacherApp.tsx";
import MeasureTime from "./copycat-lib/MeasureTime.tsx";
import { MeasurementContextProvider } from "./copycat-lib/MeasurementContext.tsx";
import Performance from "./copycat-lib/Performance.tsx";

function DoNotEditThis() {
    return (
        <MeasurementContextProvider>
            <CopycatHeader />
            <main>
                <div id="tabs">
                    <button className="tab student">
                        <span className="title">StudentApp.tsx</span>
                        <Performance label="student" />
                    </button>
                    <button className="tab teacher">
                        <span className="title">TeacherApp.tsx</span>
                        <Performance label="teacher" />
                    </button>
                </div>
                <div id="apps">
                    <div className="app student" id="studentApp">
                        <MeasureTime label="student">
                            <StudentApp />
                        </MeasureTime>
                    </div>
                    <div className="app teacher" id="teacherApp">
                        <MeasureTime label="teacher">
                            <TeacherApp />
                        </MeasureTime>
                    </div>
                </div>
            </main>
        </MeasurementContextProvider>
    )
}

export default DoNotEditThis;