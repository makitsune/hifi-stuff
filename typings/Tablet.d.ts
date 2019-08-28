declare namespace Tablet {
	function getTablet(name: string): TabletProxy; // "com.highfidelity.interface.tablet.system"
	function playSound(sound: Tablet.AudioEvents): void;

	var tabletNotification: Signal;

	enum AudioEvents {
		buttonClick,
		buttonHover,
		tabletOpen,
		tabletHandsIn,
		tabletHandsOut,
	}
}