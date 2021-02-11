from pathlib import Path
import globals


def run():
    Path(globals.output_path).mkdir(parents=True, exist_ok=True)