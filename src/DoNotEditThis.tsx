import CopycatHeader from "./copycat-lib/CopycatHeader.tsx";
import StudentApp from "./StudentApp/StudentApp.tsx";
import TeacherApp from "./TeacherApp/TeacherApp.tsx";

function DoNotEditThis() {
    return (
        <>
            <CopycatHeader />
            <main>
                <div id="tabs">
                    <button className="tab student">
                        StudentApp.tsx
                    </button>
                    <button className="tab teacher">
                        TeacherApp.tsx
                    </button>
                </div>
                <div id="apps">
                    <div className="app student" id="studentApp">
                        <StudentApp />
                    </div>
                    <div className="app teacher" id="teacherApp">
                        <TeacherApp />
                    </div>
                </div>
            </main>
        </>
    )
}

export default DoNotEditThis;