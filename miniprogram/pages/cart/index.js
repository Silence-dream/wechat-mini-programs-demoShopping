"use strict";
Page({
    data: {},
    handleChooseAddress() {
        wx.getSetting({
            success: (result) => {
                console.log(result);
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFLEVBQUU7SUFFUixtQkFBbUI7UUFPakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvY2FydC9pbmRleC5qc1xuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHt9LFxuICAvLyDojrflj5bnlKjmiLfmlLbojrflnLDlnYBcbiAgaGFuZGxlQ2hvb3NlQWRkcmVzcygpIHtcbiAgICAvLyB3eC5jaG9vc2VBZGRyZXNzKHtcbiAgICAvLyAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAvLyAgIH0sXG4gICAgLy8gfSk7XG4gICAgLy8gICBodHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9jb21tdW5pdHkvZGV2ZWxvcC9kb2MvMDAwYzBhMGE1OTA0OTA1OTBkMGJhMGMzZDUxODAxXG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=